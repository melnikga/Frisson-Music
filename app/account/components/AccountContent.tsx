'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useUser } from '@/hooks/useUser';
import Button from '@/components/Button';
import useSubscribeModal from '@/hooks/useSubscribeModal';
import { postData } from '@/libs/helpers';

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, subscription, user, userDetails } = useUser();
	console.log(userDetails?.isAdmin)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/');
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link',
      });
      window.location.assign(url);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className='mb-7 px-6'>
      {!subscription && (
        <div className='flex flex-col gap-y-4'>
          <p>No active plan.</p>
          <Button onClick={subscribeModal.onOpen} className='w-[300px]'>
            Subscribe
          </Button>
        </div>
      )}
      {userDetails?.isAdmin? (
        <div className='flex gap-4'>
          <Button
          onClick={()=> router.push('editor-playlists')}
          >
            Editor playlists
          </Button>
          <Button
          onClick={()=> router.push('chart-settings')}
          >
            Charts
          </Button>
          <Button
          onClick={()=> router.push('add-news')}
          >
            News
          </Button>
        </div>
      ): subscription && (
        <div className='flex flex-col gap-y-4'>
          <p>
            You are currently on the
            <b> {subscription?.prices?.products?.name} </b>
            plan.
          </p>
          <Button
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
            className='w-[300px]'
          >
            Open customer portal
          </Button>
        </div>
      )
      }

    </div>
  );
};

export default AccountContent;