import { Card, Flex, Tag } from 'antd'
import {
	EnvironmentOutlined,
	PhoneOutlined,
	SolutionOutlined,
} from '@ant-design/icons'

const { Meta } = Card

export const Advocate = ({ advocate }) => {
	return (
		<Card
			bordered={false}
			hoverable
			actions={[
				<>
					<EnvironmentOutlined key='location' /> {advocate.city}
				</>,
				<>
					<PhoneOutlined key='phone' /> {advocate.phoneNumber}
				</>,
				<>
					<SolutionOutlined key='experience' /> {advocate.yearsOfExperience}{' '}
					years of experience
				</>,
			]}
		>
			<Meta
				title={`${advocate.firstName} ${advocate.lastName}`}
				description={advocate.degree}
			/>

			<Flex gap='5px 0' wrap justify='center' style={{ marginTop: 20 }}>
				{advocate.specialties.map((specialty, i) => (
					<Tag key={i} bordered={false} color='processing'>
						{specialty}
					</Tag>
				))}
			</Flex>
		</Card>
	)
}
