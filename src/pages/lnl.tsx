import React from 'react';
import { Avatar, AvatarGroup, ButtonBase } from '@mui/material';
import classNames from 'classnames';

import Loader from 'components/Loader';
import useLnLLists from 'hooks/useLnLLists';
import { getLayout } from 'components/Layout';

export default function ProfilesPage() {
  const lnl = useLnLLists();

  return (
    <div className="space-y-12">
      <h1 className="font-light text-4xl">
        <span className="hidden md:inline">Upcoming </span>Lunch &amp; Learns
      </h1>
      {lnl === undefined ? (
        <Loader />
      ) : (
        <dl className="flex flex-col gap-4">
          {lnl?.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target={item.id}
              title="View in Trello"
            >
              <ButtonBase tabIndex={-1} className="!rounded-lg w-full">
                <div
                  className={classNames(
                    'border-2 dark:border-gray-600 flex items-center justify-between rounded-lg p-4 w-full',
                    {
                      'border-green-500': item.today,
                    }
                  )}
                >
                  <dt className="text-lg">
                    {item.start.toFormat('dd MMMM yyyy')}
                  </dt>
                  <dd>
                    <AvatarGroup>
                      {item.members.map((member) => (
                        <Avatar
                          key={member.fullName}
                          src={`${member.avatarUrl}/170.png`}
                          title={member.fullName}
                        />
                      ))}
                    </AvatarGroup>
                  </dd>
                </div>
              </ButtonBase>
            </a>
          ))}
        </dl>
      )}
    </div>
  );
}

ProfilesPage.options = {
  withUser: true,
  layout: getLayout,
  head: { title: 'Upcoming Lunch & Learns' },
};
