import React from 'react';

import './styles.scss';

type IdProps = 'stackoverflow' | 'linkedin' | 'twitter' | 'github';

type Props = Readonly <{
  type: IdProps;
  link: string;
  fill?: string;
  width?: string;
}>

const SocialTemplate = ({ id }: { id: IdProps }): JSX.Element => (
  <svg><use xlinkHref={`#${id}`} /></svg>
);

const Social = ({
  type,
  link,
  fill = 'white',
  width = '30px',
}: Props): JSX.Element => (
  <div className="Social" style={{ fill, width }}>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialTemplate id={type} />
    </a>
  </div>
);


export default Social;
