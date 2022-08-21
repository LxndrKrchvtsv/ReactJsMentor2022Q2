import React from 'react';

import { Logo } from '../../components/UI/Logo/Logo';

import Styles from './Footer.module.css';

export const Footer = () => (
	<footer className={Styles.footer__wrapper}>
		<Logo />
	</footer>
);
