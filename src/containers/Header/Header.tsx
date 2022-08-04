import React from 'react';

import { Props } from '../../types/types';

import Styles from './Header.module.css';

export const Header = (props: Props) => <header className={Styles.header}>{props.children}</header>;
