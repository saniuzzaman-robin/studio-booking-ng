import { TestBed } from '@angular/core/testing';

import { RootHttpInterceptor } from './root-http.interceptor';

describe('HttpInterceptorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RootHttpInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: RootHttpInterceptor = TestBed.inject(
      RootHttpInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
