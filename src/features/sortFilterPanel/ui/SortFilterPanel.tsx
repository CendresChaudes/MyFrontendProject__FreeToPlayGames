import { DownOutlined } from '@ant-design/icons';
import { Space, Dropdown, Col, Row, Typography, MenuProps } from 'antd';
import {
  getCurrentPlatformFilter,
  getCurrentGenreFilter,
  getCurrentSortType,
  Platform,
  SortType,
  Genre,
  changeCurrentPlatformFilter,
  changeCurrentGenreFilter,
  changeCurrentSortType,
} from '@/entities/game';
import {
  getKeyByValue,
  useAppDispatch,
  useAppSelector,
  useBreakpoint,
} from '@/shared/lib';
import { platformItems, genreItems, sortItems } from '../const';
import styles from './styles.module.css';

const { Text } = Typography;

export function SortFilterPanel() {
  const dispatch = useAppDispatch();
  const currentBreakpoint = useBreakpoint();

  const currentPlatformFilter = useAppSelector(getCurrentPlatformFilter);
  const currentGenreFilter = useAppSelector(getCurrentGenreFilter);
  const currentSortType = useAppSelector(getCurrentSortType);

  const onDropdownPlatformFilterItemClick: MenuProps['onClick'] = ({ key }) => {
    const dropdownItem = platformItems.find((item) => item.key === key) as (typeof platformItems)[number];
    dispatch(changeCurrentPlatformFilter(Platform[dropdownItem.label]));
  };

  const onDropdownGenreFilterItemClick: MenuProps['onClick'] = ({ key }) => {
    const dropdownItem = genreItems.find((item) => item.key === key) as (typeof genreItems)[number];
    dispatch(changeCurrentGenreFilter(Genre[dropdownItem.label]));
  };

  const onDropdownSortTypeItemClick: MenuProps['onClick'] = ({ key }) => {
    const dropdownItem = sortItems.find((item) => item.key === key) as (typeof sortItems)[number];
    dispatch(changeCurrentSortType(SortType[dropdownItem.label]));
  };

  return (
    <Row className={styles.panel} justify="space-evenly">
      <Col className={styles.col} xs={{span: 24}} sm={{span: 6}}>
        <Space
          className={styles.item}
          direction={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 'vertical'
              : 'horizontal'
          }
          size={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 4
              : 'small'
          }
        >
          <Text className={styles.text}>Platform:</Text>
          <Dropdown
            className={styles.dropdown}
            menu={{
              items: platformItems,
              onClick: onDropdownPlatformFilterItemClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {getKeyByValue(Platform, currentPlatformFilter)}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </Col>

      <Col className={styles.col} xs={{span: 24}} sm={{span: 6}}>
        <Space
          className={styles.item}
          direction={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 'vertical'
              : 'horizontal'
          }
          size={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 4
              : 'small'
          }
        >
          <Text className={styles.text}>Genre:</Text>
          <Dropdown
            className={styles.dropdown}
            menu={{
              items: genreItems,
              onClick: onDropdownGenreFilterItemClick,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {getKeyByValue(Genre, currentGenreFilter)}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </Col>

      <Col className={styles.col} xs={{span: 24}} sm={{span: 6}}>
        <Space
          className={styles.item}
          direction={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 'vertical'
              : 'horizontal'
          }
          size={
            currentBreakpoint === 'sm' ||
            currentBreakpoint === 'md'
              ? 4
              : 'small'
          }
        >
          <Text className={styles.text}>Sort By:</Text>
          <Dropdown
            className={styles.dropdown}
            menu={{ items: sortItems, onClick: onDropdownSortTypeItemClick }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {getKeyByValue(SortType, currentSortType)}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Space>
      </Col>
    </Row>
  );
}
