import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {  
  CallComposite, 
  fromFlatCommunicationIdentifier, 
  useAzureCommunicationCallAdapter 
} from '@azure/communication-react';
import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

const App = () => { 
  const displayName = 'Guest'
  const [userId, setUserId] = useState<string>('8:acs:c06d2499-3ea1-4ae6-bafe-f4362127ea15_0000001b-2f44-c41b-d107-5748220007ef');
  const [token, setToken] = useState<string>('eyJhbGciOiJSUzI1NiIsImtpZCI6IjVFODQ4MjE0Qzc3MDczQUU1QzJCREU1Q0NENTQ0ODlEREYyQzRDODQiLCJ4NXQiOiJYb1NDRk1kd2M2NWNLOTVjelZSSW5kOHNUSVEiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOmMwNmQyNDk5LTNlYTEtNGFlNi1iYWZlLWY0MzYyMTI3ZWExNV8wMDAwMDAxYi0yZjQ0LWM0MWItZDEwNy01NzQ4MjIwMDA3ZWYiLCJzY3AiOjE3OTIsImNzaSI6IjE2OTQ2MjI3NTIiLCJleHAiOjE2OTQ3MDkxNTIsInJnbiI6ImluIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiYzA2ZDI0OTktM2VhMS00YWU2LWJhZmUtZjQzNjIxMjdlYTE1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImluZGlhIiwiaWF0IjoxNjk0NjIyNzUyfQ.HKMAO4GSXaRyVEgA2cYdongTBS2r546gVoKGL9ZHjyxdFLkkRJof4sUwKHy1NhkBuIT3cVHaCXTIsSjJA1nLvrINk8Tjd7FOUReNzoOopW-jJE1Jllo2P0nIY3oFFaX-M2TX6I0e4lEhpTzEzzIQql_uPaOOYAD8CyuPdYk_flbFMFkYLicn1BZfAh-oMOFpkgjS4EIqNHIUhR6lLoW1SAm7HU-76j3lhhPLVTxUX-i0ixFHVEXFZXmjAFPFiWTcSlKvnx05nReeKViZAat-HuJMzRs-f5hk23ynw6xDEtB_4uawt15uYah_WjxbNSQ3IppzGmO4RdjEVoEaGVh7xg');
  // const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTdlNzg3NDEtZGEyYi00MjY1LWE2ZTctYTRkZTdiMjA1ZTM5%40thread.v2/0?context=%7b%22Tid%22%3a%223f83cb9e-c1b8-4e60-ab69-f6a4e65cdcbc%22%2c%22Oid%22%3a%228eb27107-13dd-4816-8d32-a70ffc0657a4%22%7d');
  const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const credential = useMemo(() => {
    if (token) {
      return new AzureCommunicationTokenCredential(token)
    }
    return;
    }, [token]);

  const callAdapterArgs = useMemo(() => {
    if (userId && credential && displayName && teamsMeetingLink) {
      return {
        userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
        displayName,
        credential,
        locator: { meetingLink: teamsMeetingLink },
      }
    }
    return {};
  }, [userId, credential, displayName, teamsMeetingLink]);

  const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs);

  useEffect(() => {
    // commenting out for now
    const init = async () => {
      setMessage('Getting ACS user');
      //Call Azure Function to get the ACS user identity and token
      const res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);
      const user = await res.json();
      setUserId(user.userId);
      setToken(user.token);

      setMessage('Getting Teams meeting link...');
      //Call Azure Function to get the meeting link
      const resTeams = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
      const link = await resTeams.text();
      setTeamsMeetingLink(link);
      setMessage('');
      console.log('Teams meeting link', link);
    }
    init();
  }, []);

  if (callAdapter) {
    return (
      <div>
        <h1>Contact Customer Service</h1>
        <div className="wrapper">
          <CallComposite
            adapter={callAdapter}
          />
        </div>
      </div>
    );
  }
  if (!credential) {
    return <>Failed to construct credential. Provided token is malformed.</>;
  }
  if (message) {
    return <div>{message}</div>;
  }
  return <div>Initializing...</div>;
};

export default App;
