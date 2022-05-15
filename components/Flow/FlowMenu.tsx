import { Menu } from 'antd';
import {
  NodeIndexOutlined,
  PartitionOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => (
  <Menu
    mode="inline"
    style={{ height: '100%' }}
  >
    <SubMenu key="journeys" icon={<PartitionOutlined />} title="Journeys">
      <Menu.Item key="journeyId" icon={<NodeIndexOutlined />}>
        Journey
      </Menu.Item>
    </SubMenu>
  </Menu>
);

export default Sidebar;
