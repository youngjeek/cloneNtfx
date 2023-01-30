import Auth from './Auth';

function Sign() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '200px',
        }}
      >
        <div style={{ margin: 'auto' }}>
          <Auth />
        </div>
      </div>
    </>
  );
}
export default Sign;
