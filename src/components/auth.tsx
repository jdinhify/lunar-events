import React, { useState } from 'react'
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react'
import { AuthState, AuthStateHandler } from '@aws-amplify/ui-components'
import '../integration/aws-config'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

export const Protected = ({ children }) => {
  const { query } = useRouter()
  const [state, setState] = useState<{ authState: AuthState }>({
    authState: AuthState.Loading,
  })

  const handleAuthStateChange: AuthStateHandler = (nextAuthState) =>
    setState({ authState: nextAuthState })

  return state.authState === AuthState.SignedIn ||
    state.authState === AuthState.VerifyContact ? (
    <>
      <div className="sign-out-wrapper noprint">
        <button onClick={() => Auth.signOut()}>Đăng xuất</button>
      </div>
      {children}

      <style jsx>{`
        .sign-out-wrapper {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
        }
      `}</style>
    </>
  ) : (
    <div className="wrapper">
      <AmplifyAuthenticator handleAuthStateChange={handleAuthStateChange}>
        <AmplifySignIn
          submitButtonText="Đăng nhập"
          hideSignUp={query.showSignUp !== '1'}
          slot="sign-in"
          formFields={[{ type: 'username' }, { type: 'password', hint: '' }]}
          headerText=""
        />
        <AmplifySignUp
          slot="sign-up"
          formFields={[
            {
              type: 'username',
            },
            {
              type: 'password',
            },
          ]}
        />
      </AmplifyAuthenticator>

      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: center;
          height: 100vh;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
