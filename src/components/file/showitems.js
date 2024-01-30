import React from 'react';

export default function ShowItems({ title, items }) {
  return (
    <div>
      <h4>{title}</h4>
      <table className='w-full'>
        <tbody>
          <tr>
            {items.map((item, index) => (
              <td key={index * 55} className='py-2 px-4 border'>
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
