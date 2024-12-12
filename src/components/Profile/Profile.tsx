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
				<img
					src={user.image}
					alt='Профиль пользователя'
					width={50}
					height={50}
				/>
				<p>
					{user.name} {user.lastName[0].toUpperCase()}.
				</p>
			</div>
		</>
	);
};

export default Profile;
