import { Spinner } from "@/shared/ui/Spinner/Spinner";


export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {

  type Props = P & { isLoading: boolean };

  const WrappedComponent: React.FC<Props> = ({ isLoading, ...rest }) => {
    if (isLoading) {
      return <Spinner />;
    }
    return <Component {...(rest as P)} />;
  };
 
  return WrappedComponent;
}
