import { Card, Descriptions, Image, Tag } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const BidCreatedDetails = ({ bidData }) => {
  // Format dates for display
  const formatDate = (date) => dayjs(date).format('YYYY-MM-DD HH:mm');
  
  return (
    <Card title={`Bid Details - ${bidData.bidId}`} style={{ margin: '20px' }}>
      <Descriptions bordered column={1} size="middle">
        <Descriptions.Item label="Service Provider ID">{bidData.serviceProviderid}</Descriptions.Item>
        <Descriptions.Item label="Bidding Period">
          {formatDate(bidData.startBidTime)} to {formatDate(bidData.endBidTime)}
        </Descriptions.Item>
        <Descriptions.Item label="Service Time">{formatDate(bidData.serviceTime)}</Descriptions.Item>
        <Descriptions.Item label="Category">
          <Tag color="blue">{bidData.category}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Description">{bidData.description}</Descriptions.Item>
        <Descriptions.Item label="Maximum Amount">${bidData.maxAmount.toFixed(2)}</Descriptions.Item>
        <Descriptions.Item label="Address">{bidData.address}</Descriptions.Item>
        <Descriptions.Item label="Additional Notes">{bidData.additionalNotes}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color={bidData.status === 'active' ? 'green' : 'red'}>{bidData.status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Images">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {bidData.image && Object.entries(bidData.image).map(([key, imgData]) => (
              <Image
                key={key}
                width={150}
                src={imgData.url || 'https://via.placeholder.com/150'}
                alt={imgData.altText || 'Bid image'}
              />
            ))}
          </div>
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BidCreatedDetails;