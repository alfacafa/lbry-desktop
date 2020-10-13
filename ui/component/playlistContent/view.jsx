// @flow
import React from 'react';
import ClaimList from 'component/claimList';
import Card from 'component/common/card';
import { useIsMobile, useIsMediumScreen } from 'effects/use-screensize';

type Props = {
  claims: Array<Claim>,
  name: string,
};

export default function PlaylistContent(props: Props) {
  const { claims, name } = props;
  console.log('name in comp', name);
  const isMobile = useIsMobile();
  const isMedium = useIsMediumScreen();

  return (
    <Card
      isBodyList
      smallTitle={!isMobile && !isMedium}
      className="file-page__recommended"
      title={__('Playlist') + ': ' + name}
      body={
        <ClaimList
          isCardBody
          type="small"
          // loading={isSearching}
          uris={claims}
          // injectedItem={SHOW_ADS && !isAuthenticated && IS_WEB && <Ads type="video" small />}
          empty={__('Playlist is empty')}
          // playlist={}
        />
      }
    />
  );
}
