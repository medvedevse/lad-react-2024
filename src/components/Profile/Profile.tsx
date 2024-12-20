import { User } from '@/types/user';
import classes from './Profile.module.scss';

export type UserProps = {
	user: User;
};

const Profile = (props: UserProps) => {
	const { user } = props;
	return (
		<>
			<div className={classes.wrap}>
				<img src={user.image} alt="Профиль пользователя" width={38} height={38} />
				<div>
					{user.name} {user.lastName[0].toUpperCase()}.
				</div>
			</div>
		</>
	);
};

export default Profile;
