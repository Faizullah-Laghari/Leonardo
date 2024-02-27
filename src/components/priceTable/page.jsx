import classes from './pricing.module.css';

export default function PricingPlan({ title, duration, features, price,onClick }) {
  return (
    <div className={classes.price_table} onClick={onClick}>
      <div className={classes.price_title}>
        <h3>{title}</h3>
        <p>{duration}</p>
        {Array.isArray(features) && features.map((feature, index) => (
          <p key={index}>- {feature}</p>
        ))}
      </div>
      <div className={classes.price}>
        <h2>{price}</h2>
      </div>
    </div>
  );
}
