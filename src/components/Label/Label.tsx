import React from 'react';

type PropsLabel = {
	label: string;
	labelClassName?: string;
};

export const Label = ({ label, labelClassName }: PropsLabel) => <h1 className={labelClassName}>{label}</h1>;
