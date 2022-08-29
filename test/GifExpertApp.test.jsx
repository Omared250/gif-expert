import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe Match con el sanpshot', () => {
        const { container } = render(<GifExpertApp />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe retornar un array de mas de 0 elementos', () => {
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, { target : { value : 'Dragon Ball'} } );
        fireEvent.submit(form);
        
        fireEvent.input( input, { target : { value : 'Omar'} } );
        fireEvent.submit(form);
        
        expect( screen.getAllByRole('heading', { level : 3} ).length ).toBeGreaterThan(0);
        expect( screen.getByText('Dragon Ball')).toBeTruthy();
    });

});