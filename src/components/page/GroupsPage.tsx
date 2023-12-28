import { GroupList } from '@/features/groups/components/GroupList';
import { fetchGroupList } from '@/lib/api/data';
import { IGroup } from '@/types/definition';
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';

import { AuthTokens } from 'aws-amplify/auth';
import { fetchAuthSession } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';

async function getToken() {
  const token: AuthTokens | null = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });
  return token;
}

export const GroupsPage = async () => {
  const groups: IGroup[] = await fetchGroupList();
  const token = await getToken();
  console.log('idToken server component', token.idToken?.toString());
  return (
    <>
      GroupsPage
      <GroupList groups={groups} />
    </>
  );
};
