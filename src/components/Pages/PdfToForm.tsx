import { PDF_TO_FORM } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function PdfToForm(): React.JSX.Element {
	return (
		<Page pageNumber={PDF_TO_FORM.pageNumber}>
			<PdfConversionForm />
		</Page>
	);
}

function PdfConversionForm(): React.JSX.Element {
	return (
		<form>
			<label htmlFor='pdf-file'>Choose a PDF file to convert to a form:</label>
			<input type='file' id='pdf-file' name='pdf-file' accept='application/pdf' />
			<button type='submit'>Convert</button>
		</form>
	);
}
