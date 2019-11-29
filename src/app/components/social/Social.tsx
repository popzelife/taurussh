import React from 'react';

import './styles.scss';

type IdProps = 'stackoverflow' | 'linkedin' | 'twitter' | 'github';

type Props = Readonly <{
  type: IdProps;
  link: string;
  fill?: string;
  width?: string;
  shadowColor?: string;
}>

const SocialTemplate = ({ id }: { id: IdProps }): JSX.Element => (
  <svg><use xlinkHref={`#${id}`} /></svg>
);

const Social = ({
  type,
  link,
  fill = 'white',
  width = '30px',
  shadowColor = fill,
}: Props): JSX.Element => {
  const shadowClass = `Social-${shadowColor.replace(/\(|\)|#|,|\.|%/, '-')}`;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
  .${shadowClass} svg {
    filter: drop-shadow(0 4px 50px ${shadowColor});
  }
  .${shadowClass} svg:hover {
    filter: drop-shadow(0 4px 30px ${shadowColor});
  }
`;
  document.getElementsByTagName('head')[0].appendChild(style);

  return (
    <div className={`Social ${shadowClass}`} style={{ fill, width }}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialTemplate id={type} />
      </a>
    </div>
  );
};


export default Social;
