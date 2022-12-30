import Layout from '../layouts/Layout';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div>
<Layout/>
   
    <section className={classes.profile}>
     
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
    </div>
  );
};

export default UserProfile;