<?php
/*
Template Name: Contact Page
*/

get_header(); ?>


<div id="main-content" class="main-content">

    <?php
        $mypost = array( 'post_type' => 'team','orderby' => 'menu_order');
        $loop = new WP_Query( $mypost );
    ?>
    <?php while ( $loop->have_posts() ) : $loop->the_post();?>
        <article id="post-<?php the_ID(); ?>" class="individual-member" <?php post_class(); ?>>
            <div class="individual-information">
                <h3><?php the_title(); ?></h3>
                <h4>{<?php echo get_post_meta( $post->ID, '_cmb2_team_title', true ); ?>}</h4>   
                <p><?php echo get_post_meta( $post->ID, '_cmb2_team_wysiwyg', true ); ?></p> 
                <div class="individual-contact">

                	<div class="team_cell">
                		<span class="red">Cell:</span><span class="space"><?php echo get_post_meta( $post->ID, '_cmb2_team_cell', true ); ?></span>
                	</div>
                	<a href="#" class="formTrigger">
                		<span class="red">E:&nbsp;</span><?php echo get_post_meta( $post->ID, '_cmb2_team_email', true ); ?>
                	</a>
                </div>
                <div class="contact_form">
                	<?php 
                	$form = get_post_meta( $post->ID, '_cmb2_team_contact', true );
                	echo do_shortcode($form); ?>
                </div>  
            </div>
  		</article>
    <?php endwhile; ?>

    <div id="page-content-block">
    	<?php
			if ( have_posts() ) :
				// Start the Loop.
				while ( have_posts() ) : the_post();

					the_content();

				endwhile;
				

			else :
				// If no content, include the "No posts found" template.
				get_template_part( 'content', 'none' );

			endif;
		?>
    </div>
</div>
<?php wp_reset_query(); ?>
<?php get_footer(); ?>