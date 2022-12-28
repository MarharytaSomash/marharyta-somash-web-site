 import styles from '../../styles/Currency.module.scss';

function Table(props: any) : JSX.Element{
	const { data, currency, course, } = props;
   return (
      <table className={styles.table}>
					<thead>
							<tr>
									<th>DATA</th>
									<th>CURRENCY</th>
									<th>COURSE</th>
							</tr>
					</thead>
					<tbody>
							<tr>
									<td>{data} </td>
									<td>currency?</td>
									<td> course of currency?</td>

							</tr>
							</tbody>
					
			  </table>
      
   )
}
export default Table;