import CustomCard from '../CustomCard/CustomCard';

export default function Women() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '6%',
        flexWrap: 'wrap',
        gap: '30px',
        marginBottom: '5%',
      }}
    >
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </div>
  );
}