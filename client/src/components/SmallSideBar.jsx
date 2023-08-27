import Wrapper from '../assets/wrappers/SmallSidebar';
import useDashboardContext from '../hooks/useDashboardContext';

export default function SmallSideBar() {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>SmallSideBar</Wrapper>;
}
