import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { axe } from 'jest-axe';
import Button from '../index';

describe('Button - 접근성/행동 테스트', () => {
  afterEach(() => {
    cleanup();
  });

  it('a11y 테스트: 기본 렌더에서 WCAG 위반이 없어야한다.', async () => {
    const { container } = render(<Button>저장</Button>);

    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  it('접근 가능한 이름과 역할을 노출한다', () => {
    render(<Button>저장</Button>);
    const btn = screen.getByRole('button', { name: '저장' });
    expect(btn).toBeInTheDocument();
  });

  it('variant/intent를 data-*로 노출한다.', () => {
    render(
      <Button variant="outline" intent="danger">
        삭제
      </Button>,
    );
    const btn = screen.getByRole('button', { name: '삭제' });
    expect(btn).toHaveAttribute('data-variant', 'outline');
    expect(btn).toHaveAttribute('data-intent', 'danger');
  });

  it('busy면 입력을 disabled하고 aria-busy를 노출한다.', () => {
    render(<Button busy>저장</Button>);
    const btn = screen.getByRole('button', { name: '저장' });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('ref가 <button> Dom에 연결된다', () => {
    let el: HTMLButtonElement | null = null;
    render(<Button ref={(ref) => (el = ref)}>포커스</Button>);
    expect(el?.tagName).toBe('BUTTON');
  });
});
