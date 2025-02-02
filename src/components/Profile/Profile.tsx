import { User } from '@/types/user';
import classes from './Profile.module.scss';

export type UserProps = {
	user: User;
};

const Profile = (props: UserProps) => {
	return (
		<div className={classes.wrap}>
			<p>{props.user && props.user.firstName + ' ' + props.user.lastName[0].toUpperCase()}.</p>
		</div>
	);
};

export default Profile;
