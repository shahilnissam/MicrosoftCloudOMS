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
  const [userId, setUserId] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNhN2E2NjctMjM0OS00ZjY1LTkwY2MtZDQ0OWJkMGY4NTc4%40thread.v2/0?context=%7b%22Tid%22%3a%223f83cb9e-c1b8-4e60-ab69-f6a4e65cdcbc%22%2c%22Oid%22%3a%228eb27107-13dd-4816-8d32-a70ffc0657a4%22%7d');
  // const [teamsMeetingLink, setTeamsMeetingLink] = useState<string>('');
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
      // const resTeams = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
      // const link = await resTeams.text();
      setTeamsMeetingLink('https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWNhN2E2NjctMjM0OS00ZjY1LTkwY2MtZDQ0OWJkMGY4NTc4%40thread.v2/0?context=%7b%22Tid%22%3a%223f83cb9e-c1b8-4e60-ab69-f6a4e65cdcbc%22%2c%22Oid%22%3a%228eb27107-13dd-4816-8d32-a70ffc0657a4%22%7d');
      // setMessage('');
      // console.log('Teams meeting link', link);
    }
    init();
  }, []);

  if (callAdapter) {
    return (
      <div>
        <h1> BRT-OMS Communication Service | Contact HR Support Window</h1>
        <div className="wrapper">
          <CallComposite
            adapter={callAdapter}
          />
        </div>
      </div>
    );
  }
  if (!credential) {
    return <>Initializing BRT-OMS Communication Service. Please wait..</>;
  }
  if (message) {
    return <div>{message}</div>;
  }
  return <div>Initializing...</div>;
};

export default App;
