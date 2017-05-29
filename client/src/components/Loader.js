// @flow
import React from 'react';
import styled from 'styled-components';

const LoaderBox = styled.div`
  background: url('../assets/loader.svg');
  background-repeat: no-repeat;
  height: ${props => props.type === 'small' ? '100px' : 'calc(50vh)'};
  background-position: center center;
`;

type Props = {
  loading: boolean,
  type: string,
  onLoaded?: Function,
  onTimeout?: Function,
};

const Loader = ({ loading = true, type = '', onLoaded, onTimeout }: Props) => {
  if (loading) return <LoaderBox type={type} />;
  const callback = onLoaded || onTimeout;
  return callback && callback();
};

export default Loader;
