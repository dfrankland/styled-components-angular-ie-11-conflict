import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import angular from 'angular';

const Button = styled.button`
  font-size: 5rem;
  background-color: red;
  color: white;
`;

angular.module('blah', []);

angular.module('blah').directive(
  'something',
  () => ({
    link: (scope, element) => {
      render(
        <Button>Click me!</Button>,
        element[0],
      );
    },
  }),
);

angular.element(document).ready(() => {
  const bootStrapElement = (
    // BAD! Recompiles everything causing IE 11 to not work
    document

    // GOOD! Does not mess with the <head>
    // document.body
  );
  angular.bootstrap(bootStrapElement, ['blah'], {});
});
