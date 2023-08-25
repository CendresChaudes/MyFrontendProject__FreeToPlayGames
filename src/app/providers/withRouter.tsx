
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const withRouter = (Component: Component) => {
  const DecoratedComponent = () => (
    <BrowserRouter>
      <Suspense fallback={<div>Loading page...</div>}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );

  DecoratedComponent.displayName = 'Decorated component with Browser Router';
  return DecoratedComponent;
};
