
import Navigation from './Navigation'

const NavigationOverlay = ({ toggleState, handleClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-dark bg-opacity-10 backdrop-blur-lg transform ${
        toggleState ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-450 ease-in-out`}
      style={{ paddingTop: '72px' }} // Start after header height
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white focus:outline-none"
      >
        <span className='text-lg font-medium text-light p-4'>Close</span>
      </button>

      {/* Menu Content */}
      <div className="flex flex-col items-center justify-center h-full text-white">
        <Navigation />
      </div>
    </div>
  );
};

export default NavigationOverlay;

