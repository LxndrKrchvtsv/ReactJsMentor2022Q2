import React from 'react';

import { Props } from '../../types/types';

import Styles from './Footer.module.css';

export const Footer = (props: Props) => <footer className={Styles.footer__wrapper}>{props.children}</footer>;
