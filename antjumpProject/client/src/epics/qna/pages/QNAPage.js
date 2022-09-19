import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '문의번호', width: 130 },
  { field: 'qnaTitle', headerName: '문의제목', width: 800, sortable: false },
  { field: 'qnaStatus', headerName: '답변상태', width: 130 },
  { field: 'qnaDate', headerName: '문의날짜', width: 130 }
];

const rows = [
  { id: 1, qnaTitle:'캘린더 동기화 관련 문의', qnaStatus: '답변완료', qnaDate:'2022-08-14' },
  { id: 2, qnaTitle:'질문 있습니다.',qnaStatus: '답변대기', qnaDate:'2022-09-08' },
  { id: 3, qnaTitle:'질문 있어요',qnaStatus: '답변대기', qnaDate:'2022-09-17' },
  { id: 4, qnaTitle:'백로그 관련 질의',qnaStatus: '답변대기', qnaDate:'2022-08-14' },
  { id: 5, qnaTitle:'결제 취소 하고 싶어요',qnaStatus: '답변대기', qnaDate:'2022-09-18' },
  { id: 6, qnaTitle:'결제 하면 뭐가 좋나요',qnaStatus: '답변완료', qnaDate:'2022-08-19' },
  { id: 7, qnaTitle:'질문',qnaStatus: '답변완료', qnaDate:'2022-08-11' },
  { id: 8, qnaTitle:'이슈와 백로그 차이가 뭐에요',qnaStatus: '답변완료', qnaDate:'2022-08-20' },
  { id: 9, qnaTitle:'프로젝트 참여는 어떻게 하나요',qnaStatus: '답변완료', qnaDate:'2022-08-24' },
];

function QNAPage() {
  return (
    <>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />
        </div>
    </>
  );
}

export default QNAPage;