<?php /* Template Name: Wall Position Page Template */ get_header();



 ?>


<main>
	<section>
		<div class="ci__wrapper" style="width:90vw;">
			<h1><?php the_title(); ?></h1>




			<?php

			// get all of the staff
			$args = array(
			  'post_type'       => 'veteran',
			  'posts_per_page'  => -1,
			  'meta_query' => array(
			    'relation' => 'OR',
			    'lastname_clause' => array('key' => 'veteran_last_name','compare' => 'EXISTS')
			  )
			  // 'orderby' => array(
			  //   'lastname_clause' => 'ASC'
			  // )
			);

			$res = get_posts($args);

			// $guide = '<div class="flex-table row" role="rowgroup">
			//             <div class="flex-row first" role="cell"><a href="%s">%s, %s%s</a></div>
			//             <div class="flex-row" role="cell">%s</div>
			//             <div class="flex-row" role="cell">%s</div>
			//             <div class="flex-row" role="cell">%s</div>
			//             <div class="flex-row" role="cell">%s</div>
			//             <div class="flex-row" role="cell">%s%s</div>
			//           </div>';

			//print_r($res);
			// foreach($res as $rec){
			//   $fields = get_fields($rec->ID);
			//
			//   //$fields = get_fields($rec[0]->ID);
			//   //print_r($fields);
			//   $content .= sprintf(
			//     $guide
			//     ,esc_url(get_permalink($rec->ID))
			//     ,ucwords(trim($fields['veteran_last_name']))
			//     ,ucwords(trim($fields['veteran_first_name']))
			//     ,(isset($fields['veteran_middle_initial']) && $fields['veteran_middle_initial'] != ''?' '.ucwords(trim($fields['veteran_middle_initial'])).'.':'')
			//     ,ucwords(trim($fields['name_of_conflict_in_which_veteran_lost_his_or_her_life']))
			//     ,ucwords(trim($fields['branch_of_service']))
			//     ,ucwords(trim($fields['memorial_position_letter']))
			//     ,(trim($fields['memorial_position_number']))
			//   );
			// }

			//echo $content;


				// open memorial grid container
				$return_grid = '<ul id="memorial">';

				// format string for memorial grid item
		    $format_grid = '
	        <li data-num="%s" data-let="%s">
					<a href="%s" title="click here to view this persons tag">1</a>
	        </li>';

				// 0-indexed array of all letters a-z
		    $alphabet = range('a', 'g'); // 0 => a,
		    $cols = 57;
		    $rows = 7;
				$total = count(range(1, ($cols*$rows))); // int. 399


				// loop thru every grid item
		    foreach (range(1, $total) as $index => $item){

					foreach($res as $rec){
				  	$fields = get_fields($rec->ID);
						//print_r($fields);
						//$content .= sprintf(
						    // esc_url(get_permalink($rec->ID))
						    // ,ucwords(trim($fields['veteran_last_name']))
						    // ,ucwords(trim($fields['veteran_first_name']))
						    // ,(isset($fields['veteran_middle_initial']) && $fields['veteran_middle_initial'] != ''?' '.ucwords(trim($fields['veteran_middle_initial'])).'.':'')
						    // ,ucwords(trim($fields['name_of_conflict_in_which_veteran_lost_his_or_her_life']))
						    // ,ucwords(trim($fields['branch_of_service']))
						    // ,ucwords(trim($fields['memorial_position_letter']))
						    // ,(trim($fields['memorial_position_number']))
						  //);

					}

					

					// if meta query data (memorial_position_letter & memorial_position_number) equals data_let and data_num then i want to echo the permalink in the corresponding href.
					// if($fields['memorial_position_letter']) == $data_let = $alphabet[floor( ($index) / $cols)]{
					// 	echo fadsjkls;
					// }

					// get the column number of this item
	        $data_num = ( $index < $cols ) ? $index + 1 : ($index + 1) - ( $cols * floor($index / $cols) );

					// get the row letter of this item
					$data_let = $alphabet[floor( ($index) / $cols)];
					//
	        $return_grid .= sprintf(
	            $format_grid
	            ,$data_num
	            ,$data_let
							,esc_url(get_permalink($rec->ID))
							,ucwords(trim($fields['veteran_last_name']))
							,ucwords(trim($fields['veteran_first_name']))
							,(isset($fields['veteran_middle_initial']) && $fields['veteran_middle_initial'] != ''?' '.ucwords(trim($fields['veteran_middle_initial'])).'.':'')
							,ucwords(trim($fields['name_of_conflict_in_which_veteran_lost_his_or_her_life']))
							,ucwords(trim($fields['branch_of_service']))
							,ucwords(trim($fields['memorial_position_letter']))
							,(trim($fields['memorial_position_number']))
	        );


		    }
			// close memorial grid container
		  $return_grid .= '</ul>';

			// echo memorial grid to template
			echo $return_grid;
			//echo $content;
			?>

		</div>
	</section>
</main>




<?php get_footer(); ?>
