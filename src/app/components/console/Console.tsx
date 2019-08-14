import React, { Component } from 'react';
import consoleText from '../../utils/consoleText';

import './style.scss';

type Props = Readonly <{
  text: string[];
  id: string;
  colors?: string[];
  className?: string;
  contentEditable?: boolean;
}>

class Intro extends Component<Props> {
  public componentDidMount(): void {
    const { text, id, colors } = this.props;
    consoleText(text, id, colors);
  }

  public render(): JSX.Element {
    const { className, id, contentEditable } = this.props;

    return (
      <p className={className} spellCheck={false}>
        <span id={`${id}-text`} contentEditable={contentEditable} />
        <span className="console-underscore" id={id}>&#95;</span>
      </p>
    );
  }
}

export default Intro;
