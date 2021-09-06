function GuestAvatar(props: any) {
  return(
    <>
      <img 
        src={ `/img/avatars/${ props.avatar }.jpg` }
        alt={ `Avatar ${ props.avatar.slice(-1) }` }
        className="avatar"
      />
    </>
  );
}

export default GuestAvatar;
