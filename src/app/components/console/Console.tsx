import React, { Component } from 'react';
import consoleText from 'app/utils/consoleText';

import './styles.scss';

type Props = Readonly <{
  text: string[];
  id: string;
  colors?: string[];
  className?: string;
  contentEditable?: boolean;
}>

class Console extends Component<Props> {
  componentDidMount(): void {
    const { text, id, colors } = this.props;
    consoleText(text, id, colors);
  }

  render(): JSX.Element {
    const { className, id, contentEditable } = this.props;

    return (
      <p className={className} spellCheck={false}>
        <span id={`${id}-text`} contentEditable={contentEditable} />
        <span className="console-underscore" id={id}>&#95;</span>
      </p>
    );
  }
}

export default Console;
