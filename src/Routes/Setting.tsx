import authService from '../login';

function Setting() {
  const onClickSignOut = () => authService.signOut();
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
          <button onClick={onClickSignOut}>Sign-Out</button>
        </div>
      </div>
    </>
  );
}
export default Setting;
