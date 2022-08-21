import React from 'react';

import MainLogo from '../../../asset/inline/logo.svg';
import SmallLogo from '../../../asset/inline/netflixroulette.svg';

type Props = {
	small?: boolean;
};

export const Logo = ({ small = false }: Props) => {
	return <img src={small ? SmallLogo : MainLogo} alt={'logo'} />;
};
