import { Vortex } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div className='Loader'>
    <Vortex
    className = "loaders"
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
    </div>
  );
};
