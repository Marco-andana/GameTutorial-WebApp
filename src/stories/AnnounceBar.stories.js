import AnnounceBar from '../components/AnnounceBar.jsx'
 
const stories = {
  title: 'AnnounceBar',
  component: AnnounceBar,
}
 
export default stories ;
 
const WithTypeSuccess = () => (
  <AnnounceBar
    title="Success"
    content="This is a success message"
    ctaLabel="Click me"
    type="success"
  />
);
 
export { WithTypeSuccess };