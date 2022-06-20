interface IProps {
  avatar: string
};

const GuestAvatar = (props: IProps) => {
  return(
    <>
      <img 
        src={ `/img/avatars/${ props.avatar }.jpg` }
        alt={ `Avatar ${ props.avatar.slice(-1) }` }
        className="avatar"
      />
    </>
  );
};

export default GuestAvatar;
