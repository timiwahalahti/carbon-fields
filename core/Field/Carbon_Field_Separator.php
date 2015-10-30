<?php 

class Carbon_Field_Separator extends Carbon_Field {
	function template() {
		?>
		<h3>{{{ label }}}</h3>
		<?php
	}

	function load() {
		// skip;
	}

	function save() {
		// skip;
	}

	function delete() {
		// skip;
	}

	function is_required() {
		return false;
	}
}