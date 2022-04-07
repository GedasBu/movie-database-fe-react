import { Formik, Form } from 'formik';
import TextInputField from 'components/TextInputField/TextInputField';

import Button from '../../components/Button/Button';
import SelectField from '../../components/SelectField/SelectField';
import styles from './FilterForm.module.css';

type MovieFilterProps = {
  onFilterSubmit: (values: MovieListFilterValues) => void;
  onFilterReset?: (values: MovieListFilterValues) => void;
  sortOptions: { value: string; label: string }[];
  genreOptions: { value: string; label: string }[];
  initialValues: MovieListFilterValues;
};

export type MovieListFilterValues = {
  title: string;
  genres: string[];
  sort: string;
};

const FilterForm = ({ genreOptions, initialValues, sortOptions, onFilterReset, onFilterSubmit }: MovieFilterProps): JSX.Element => {
  return (
    <Formik initialValues={initialValues} onReset={onFilterReset} onSubmit={onFilterSubmit}>
      {({ resetForm }) => {
        return (
          <>
            <Form className={styles.filterSortContainer}>
              <TextInputField id="title" name="title" placeholder="Enter name" type="text" />
              <SelectField id="genres" name="genres" options={genreOptions} placeholder="Select genre" isMulti />
              <SelectField id="sort" name="sort" options={sortOptions} placeholder="Select sorting" />

              <Button text="Submit" type="submit" />
              <Button text="Reset" type="reset" onClick={() => resetForm({ values: { title: '', genres: [], sort: '' } })} />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};
export default FilterForm;
