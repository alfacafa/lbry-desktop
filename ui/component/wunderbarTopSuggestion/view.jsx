// @flow
import React from 'react';
import LbcSymbol from 'component/common/lbc-symbol';
import WunderbarSuggestion from 'component/wunderbarSuggestion';
import { ComboboxOption } from '@reach/combobox';

type Props = {
  query: string,
  winningUri: ?string,
  doResolveUris: (Array<string>) => void,
  uris: Array<string>,
  resolvingUris: boolean,
};

export default function WunderbarTopSuggestion(props: Props) {
  const { query, uris, resolvingUris, winningUri, doResolveUris } = props;

  const stringifiedUris = JSON.stringify(uris);
  React.useEffect(() => {
    if (stringifiedUris) {
      const arrayUris = JSON.parse(stringifiedUris);

      if (arrayUris.length > 0) {
        doResolveUris(arrayUris);
      }
    }
  }, [doResolveUris, stringifiedUris]);

  if (resolvingUris) {
    return (
      <div className="wunderbar__winning-claim">
        <div className="wunderbar__label wunderbar__placeholder-label" />

        <div className="wunderbar__suggestion wunderbar__placeholder-suggestion">
          <div className="wunderbar__placeholder-thumbnail" />
          <div className="wunderbar__placeholder-info" />
        </div>
        <hr className="wunderbar__top-separator" />
      </div>
    );
  }

  if (!winningUri) {
    return null;
  }

  return (
    <>
      <ComboboxOption value={winningUri} className="wunderbar__winning-claim">
        <div className="wunderbar__label">
          <LbcSymbol postfix={__('Winning for "%query%"', { query })} />
        </div>

        <WunderbarSuggestion uri={winningUri} noComboBox />
      </ComboboxOption>
      <hr className="wunderbar__top-separator" />
    </>
  );
}