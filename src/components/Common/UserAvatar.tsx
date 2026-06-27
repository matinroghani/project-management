import { Avatar, type AvatarProps } from "@mui/material";
import defaultAvatar from "../../assets/avatar_image.png";

type UserAvatarProps = AvatarProps & {
  src?: string | null;
  alt?: string;
};

export default function UserAvatar({
  src,
  alt,
  sx,
  ...props
}: UserAvatarProps) {
  return (
    <Avatar
      src={src || defaultAvatar}
      alt={alt}
      sx={{
        ...sx,
      }}
      {...props}
    />
  );
}
