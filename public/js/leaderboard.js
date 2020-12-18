$(document).ready(function() {
  var t = $('#sort').DataTable({
    "columnDefs": [{
      "searchable": false,
      "orderable": false,
      "targets": 0
    }],
    "order": [
      [5, 'desc'],
      [4, 'desc']
    ]
  });

  t.on('order.dt search.dt', function() {
    t.column(0, {
      search: 'applied',
      order: 'applied'
    }).nodes().each(function(cell, i) {
      cell.innerHTML = i + 1;
    });
  }).draw();
});
