/** @jsx withSlots */
import * as React from 'react';
import { withSlots, getSlots } from '@uifabric/foundation';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { ICardSectionComponent, ICardSectionProps, ICardSectionSlots } from './CardSection.types';

/* eslint-disable deprecation/deprecation */

/** @deprecated */
export const CardSectionView: ICardSectionComponent['view'] = props => {
  const { children, ...rest } = props;
  if (React.Children.count(children) < 1) {
    return null;
  }

  const Slots = getSlots<ICardSectionProps, ICardSectionSlots>(props, {
    root: Stack,
  });

  return <Slots.root {...rest}>{children}</Slots.root>;
};